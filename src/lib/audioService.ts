/**
 * Sacred Ambient Audio Service for Traditional Gruhapravesam
 * Synthesizes classical Indian Tanpura Sa-Pa drone and authentic temple bell chime
 * using native Web Audio API with zero external dependencies.
 */

class SacredAudioService {
  private audioCtx: AudioContext | null = null;
  private isPlaying = false;
  private oscillators: OscillatorNode[] = [];
  private masterGain: GainNode | null = null;
  private bellTimer: number | null = null;

  public init() {
    if (!this.audioCtx && typeof window !== "undefined") {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.audioCtx = new AudioCtx();
      }
    }
  }

  public playTempleBell() {
    try {
      this.init();
      if (!this.audioCtx) return;
      if (this.audioCtx.state === "suspended") {
        this.audioCtx.resume();
      }

      const now = this.audioCtx.currentTime;
      // Realistic multi-harmonic temple bell frequencies (fundamental ~440Hz + high metallic partials)
      const partials = [
        { f: 440, gain: 0.35, decay: 3.2 },
        { f: 885, gain: 0.25, decay: 2.4 },
        { f: 1320, gain: 0.18, decay: 1.8 },
        { f: 1765, gain: 0.12, decay: 1.2 },
        { f: 2200, gain: 0.08, decay: 0.8 },
      ];

      partials.forEach(({ f, gain, decay }) => {
        if (!this.audioCtx) return;
        const osc = this.audioCtx.createOscillator();
        const g = this.audioCtx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(f, now);

        g.gain.setValueAtTime(gain, now);
        g.gain.exponentialRampToValueAtTime(0.0001, now + decay);

        osc.connect(g);
        g.connect(this.audioCtx.destination);

        osc.start(now);
        osc.stop(now + decay);
      });
    } catch (e) {
      console.warn("Temple bell error:", e);
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      return this.play();
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public play(): boolean {
    if (this.isPlaying) return true;

    try {
      this.init();
      if (!this.audioCtx) return false;

      if (this.audioCtx.state === "suspended") {
        this.audioCtx.resume();
      }

      this.masterGain = this.audioCtx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, this.audioCtx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.2, this.audioCtx.currentTime + 3);
      this.masterGain.connect(this.audioCtx.destination);

      // Sacred Indian Tanpura Sa-Pa frequencies (C# base at ~138.59 Hz, Pa at ~207.65 Hz)
      const freqs = [
        { f: 138.59, type: "sine" as OscillatorType, vol: 0.22 },
        { f: 207.65, type: "sine" as OscillatorType, vol: 0.18 },
        { f: 277.18, type: "sine" as OscillatorType, vol: 0.1 },
        { f: 138.59 * 2, type: "triangle" as OscillatorType, vol: 0.05 },
      ];

      this.oscillators = [];
      freqs.forEach(({ f, type, vol }) => {
        if (!this.audioCtx || !this.masterGain) return;
        const osc = this.audioCtx.createOscillator();
        const oscGain = this.audioCtx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(f, this.audioCtx.currentTime);

        // Slow subtle pitch vibrato (warm tanpura drone)
        const lfo = this.audioCtx.createOscillator();
        const lfoGain = this.audioCtx.createGain();
        lfo.frequency.setValueAtTime(0.18, this.audioCtx.currentTime);
        lfoGain.gain.setValueAtTime(0.9, this.audioCtx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);
        lfo.start();

        oscGain.gain.setValueAtTime(vol, this.audioCtx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(this.masterGain);
        osc.start();
        this.oscillators.push(osc);
      });

      this.isPlaying = true;
      this.playTempleBell();

      // Gentle recurring temple bell every 28 seconds
      this.bellTimer = window.setInterval(() => {
        if (this.isPlaying) {
          this.playTempleBell();
        }
      }, 28000);

      return true;
    } catch (e) {
      console.warn("Audio playback failed:", e);
      return false;
    }
  }

  public stop() {
    if (!this.isPlaying) return;
    try {
      if (this.masterGain && this.audioCtx) {
        this.masterGain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 1);
      }
      setTimeout(() => {
        this.oscillators.forEach((osc) => {
          try {
            osc.stop();
          } catch {
            // ignore
          }
        });
        this.oscillators = [];
        this.isPlaying = false;
        if (this.bellTimer) {
          clearInterval(this.bellTimer);
          this.bellTimer = null;
        }
      }, 1000);
    } catch {
      this.isPlaying = false;
    }
  }
}

export const sacredAudio = new SacredAudioService();
