import { Line } from '@/vectors';
import TypeWriterText from './TypeWriterText';
import Link from 'next/link';

type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <div className="w-full h-[700px] md:h-[490px] relative">
                {/* Blurred circular background */}
                <div className="absolute w-[40%] h-[40%] md:w-[50%] md:h-[50%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFEF61] rounded-full blur-[90px] z-0" />

                {/* Content container */}
                <div className="w-full p-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
                    {/* Content */}
                    <h1 className="font-sunroll text-4xl md:text-6xl font-bold">
                        <TypeWriterText />
                    </h1>
                </div>
                <div className='mt-16' aria-label='hidden' />
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <p className="font-sunroll text-xl md:text-2xl mb-3">View projects</p>
                    <Targetter gotoAbout={() => { }} />


                </div>


            </div>
            <div className='mt-10 md:mt-20' aria-label='hidden' />
        </>
    );
};



const Targetter = ({
    gotoAbout,
}: {
    gotoAbout?: () => void;
}) => (
    <div className='flex items-center justify-center z-10 animate-bounce'>
        <Link href="#project">
        <Line />
        </Link>
    </div>
);

export default Home