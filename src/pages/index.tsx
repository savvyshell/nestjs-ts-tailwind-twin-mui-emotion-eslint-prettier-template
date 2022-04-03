import type { NextPage } from 'next';
import tw from 'twin.macro';
import { Alert } from '@mui/material';

const Home: NextPage = () => {
    const bundle = [
        'NextJS',
        'Typescript',
        'Tailwind',
        'Twin.Macro',
        'MUI 5',
        'Emotion',
        'ESLint',
        'Prettier',
    ];
    const github = { name: 'SavvyShell', url: 'https://github.com/savvyshell' };

    return (
        <div tw="h-screen w-screen flex flex-col justify-center items-center">
            <Alert tw="mb-5" severity="info">
                Get started with NextJS
            </Alert>
            <div tw="text-4xl text-blue-500">Homepage</div>
            <div tw="mt-4 text-gray-400">
                {bundle.map((pkg, index) => (
                    <span key={index}>
                        {pkg} {index < bundle.length - 1 && '|'}{' '}
                    </span>
                ))}
            </div>
            <div tw="text-primary-main">Test</div>
            <div tw="mt-4 text-red-600">
                <a target="_blank" href={github.url} rel="noreferrer">
                    Github: {github.name}
                </a>
            </div>
        </div>
    );
};

export default Home;
