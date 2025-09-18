"use client"

import { Button } from '@/components/ui/button';
import React, { useEffect, useRef } from 'react'
import * as Tone from 'tone';

type Props = {}

const Piano = (props: Props) => {
    const synth = useRef<Tone.PolySynth | null>(null);
    const aRef = useRef<HTMLButtonElement>(null);
    const sRef = useRef<HTMLButtonElement>(null);
    const dRef = useRef<HTMLButtonElement>(null);
    const fRef = useRef<HTMLButtonElement>(null);
    const gRef = useRef<HTMLButtonElement>(null);
    const hRef = useRef<HTMLButtonElement>(null);
    const jRef = useRef<HTMLButtonElement>(null);
    const kRef = useRef<HTMLButtonElement>(null);
    const wRef = useRef<HTMLButtonElement>(null);
    const eRef = useRef<HTMLButtonElement>(null);
    const tRef = useRef<HTMLButtonElement>(null);
    const yRef = useRef<HTMLButtonElement>(null);
    const uRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        synth.current = new Tone.PolySynth(Tone.Synth).toDestination();
        const pressedKeys = new Set<string>();
        const keyNoteMap: Record<string, string> = {
            a: "C4",
            s: "D4",
            d: "E4",
            f: "F4",
            g: "G4",
            h: "A4",
            j: "B4",
            k: "C5",
            w: "C#4",
            e: "D#4",
            t: "F#4",
            y: "G#4",
            u: "A#4",
        };
        const keyRefMap: Record<string, React.RefObject<HTMLButtonElement|null>> = {
            a: aRef,
            s: sRef,
            d: dRef,
            f: fRef,
            g: gRef,
            h: hRef,
            j: jRef,
            k: kRef,
            w: wRef,
            e: eRef,
            t: tRef,
            y: yRef,
            u: uRef,
        };

        const keyDownHandler = (event: KeyboardEvent) => {
            const note = keyNoteMap[event.key.toLowerCase()];
            const button = keyRefMap[event.key.toLowerCase()]?.current;
            if (note && button && !pressedKeys.has(event.key)) {
                pressedKeys.add(event.key);
                playNote(note, button);
            }
        };

        const keyUpHandler = (event: KeyboardEvent) => {
            const note = keyNoteMap[event.key.toLowerCase()];
            const button = keyRefMap[event.key.toLowerCase()]?.current;
            if (note && button) {
                pressedKeys.delete(event.key);
                releaseNote(note, button);
            }
        };

        document.addEventListener('keydown', keyDownHandler);
        document.addEventListener('keyup', keyUpHandler);
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
            document.removeEventListener('keyup', keyUpHandler);
        };
    }, []);

    const playNote = async (note: string, button: HTMLButtonElement) => {
        button.classList.add('!bg-purple-700');
        const now = Tone.now();
        synth.current?.triggerAttack(note, now);
    }
    const releaseNote = async (note: string, button: HTMLButtonElement) => {
        button.classList.remove('!bg-purple-700');
        const now = Tone.now();
        synth.current?.triggerRelease([note], now + 0.1);
    }
  return (
    <div className="relative flex flex-col-reverse space-x-1 items-center justify-center">
        <div className="flex flex-row space-x-1 z-0">
            <Button className="h-24 w-12  relative" onMouseDown={(e) => playNote("C4", e.currentTarget)} onMouseUp={(e) => releaseNote("C4", e.currentTarget)} onMouseLeave={(e) => releaseNote("C4", e.currentTarget)} ref={aRef}>
                C
                <span className="text-secondary absolute bottom-0">A</span>
            </Button>
            <Button className="h-24 w-12  relative" onMouseDown={(e) => playNote("D4", e.currentTarget)} onMouseUp={(e) => releaseNote("D4", e.currentTarget)} onMouseLeave={(e) => releaseNote("D4", e.currentTarget)} ref={sRef}>
                D
                <span className="text-secondary absolute bottom-0">S</span>
            </Button>
            <Button className="h-24 w-12  relative" onMouseDown={(e) => playNote("E4", e.currentTarget)} onMouseUp={(e) => releaseNote("E4", e.currentTarget)} onMouseLeave={(e) => releaseNote("E4", e.currentTarget)} ref={dRef}>
                E
                <span className="text-secondary absolute bottom-0">D</span>
            </Button>
            <Button className="h-24 w-12  relative" onMouseDown={(e) => playNote("F4", e.currentTarget)} onMouseUp={(e) => releaseNote("F4", e.currentTarget)} onMouseLeave={(e) => releaseNote("F4", e.currentTarget)} ref={fRef}>
                F
                <span className="text-secondary absolute bottom-0">F</span>
            </Button>
            <Button className="h-24 w-12  relative" onMouseDown={(e) => playNote("G4", e.currentTarget)} onMouseUp={(e) => releaseNote("G4", e.currentTarget)} onMouseLeave={(e) => releaseNote("G4", e.currentTarget)} ref={gRef}>
                G
                <span className="text-secondary absolute bottom-0">G</span>
            </Button>
            <Button className="h-24 w-12  relative" onMouseDown={(e) => playNote("A4", e.currentTarget)} onMouseUp={(e) => releaseNote("A4", e.currentTarget)} onMouseLeave={(e) => releaseNote("A4", e.currentTarget)} ref={hRef}>
                A
                <span className="text-secondary absolute bottom-0">H</span>
            </Button>
            <Button className="h-24 w-12  relative" onMouseDown={(e) => playNote("B4", e.currentTarget)} onMouseUp={(e) => releaseNote("B4", e.currentTarget)} onMouseLeave={(e) => releaseNote("B4", e.currentTarget)} ref={jRef}>
                B
                <span className="text-secondary absolute bottom-0">J</span>
            </Button>
            <Button className="h-24 w-12  relative" onMouseDown={(e) => playNote("C5", e.currentTarget)} onMouseUp={(e) => releaseNote("C5", e.currentTarget)} onMouseLeave={(e) => releaseNote("C5", e.currentTarget)} ref={kRef}>
                C
                <span className="text-secondary absolute bottom-0">K</span>
            </Button>
        </div>
        <div className="top-15 flex flex-row z-10 relative -space-x-6 -left-35">
            <Button variant={'secondary'} className="h-16 w-8 text-white relative left-0" onMouseDown={(e) => playNote("C#4", e.currentTarget)} onMouseUp={(e) => releaseNote("C#4", e.currentTarget)} onMouseLeave={(e) => releaseNote("C#4", e.currentTarget)} ref={wRef}>
                C#
                <span className="text-primary text-xs absolute bottom-0">W</span>
            </Button>
            <Button variant={'secondary'} className="h-16 w-8 text-white relative left-12" onMouseDown={(e) => playNote("D#4", e.currentTarget)} onMouseUp={(e) => releaseNote("D#4", e.currentTarget)} onMouseLeave={(e) => releaseNote("D#4", e.currentTarget)} ref={eRef}>
                D#
                <span className="text-primary text-xs absolute bottom-0">E</span>
            </Button>
            <Button variant={'secondary'} className="h-16 w-8 text-white relative left-36" onMouseDown={(e) => playNote("F#4", e.currentTarget)} onMouseUp={(e) => releaseNote("F#4", e.currentTarget)} onMouseLeave={(e) => releaseNote("F#4", e.currentTarget)} ref={tRef}>
                F#
                <span className="text-primary text-xs absolute bottom-0">T</span>
            </Button>
            <Button variant={'secondary'} className="h-16 w-8 text-white relative left-47" onMouseDown={(e) => playNote("G#4", e.currentTarget)} onMouseUp={(e) => releaseNote("G#4", e.currentTarget)} onMouseLeave={(e) => releaseNote("G#4", e.currentTarget)} ref={yRef}>
                G#
                <span className="text-primary text-xs absolute bottom-0">Y</span>
            </Button>
            <Button variant={'secondary'} className="h-16 w-8 text-white relative left-58" onMouseDown={(e) => playNote("A#4", e.currentTarget)} onMouseUp={(e) => releaseNote("A#4", e.currentTarget)} onMouseLeave={(e) => releaseNote("A#4", e.currentTarget)} ref={uRef}>
                A#
                <span className="text-primary text-xs absolute bottom-0">U</span>
            </Button>
        </div>
    </div>

  )
}

export default Piano