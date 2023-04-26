import type { NextApiRequest, NextApiResponse } from 'next';

export async function GET(request: Request) {
    const data = [
        {
            category: 'reaction',
            score: 80,
            icon: './assets/icons/icon-reaction.svg',
        },
        {
            category: 'memory',
            score: 92,
            icon: './assets/icons/icon-memory.svg',
        },
        {
            category: 'verbal',
            score: 61,
            icon: './assets/icons/icon-verbal.svg',
        },
        {
            category: 'visual',
            score: 72,
            icon: './assets/icons/icon-visual.svg',
        },
    ];

    return new Response({ data });
}