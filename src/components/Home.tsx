import { Line, UserText, ViewProject } from '@/vectors';
import React from 'react'

type Props = {}

const Home = (props: Props) => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className='flex flex-col items-center justify-center z-10'>
                <UserText/>
            </div>
            <div aria-label='hidden' className='mt-16'></div>
            <div className='flex flex-col items-center justify-center'>
                <p className="z-10 mt-2"> <ViewProject/></p>
                <Targetter gotoAbout={() => { }} />
            </div>

        </div>
    )
}


const Targetter = ({
    gotoAbout,
    notMt = false,
}: {
    gotoAbout?: () => void;
    notMt?: boolean;
}) => (
    <div className='z-10 mt-2'>
        <Line />
    </div>
);

export default Home