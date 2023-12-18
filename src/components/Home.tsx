import { Line } from '@/vectors';
import TypeWriterText from './TypeWriterText';

type Props = {}

const Home = (props: Props) => {
    return (
        <div className="w-full relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sunroll md:p-24">
            <div className='h-screen md:h-10 flex flex-col items-center justify-center z-10 text-center'>
                <h1 className='w-70 lg:w-[80%] md:text-6xl text-3xl '>
                    <TypeWriterText />
                </h1>
            </div>
            <div aria-label='hidden' className='mt-16'></div>
            <div className='flex flex-col items-center justify-center text-center'>
                <p className="mt-3 text-xl md:text-2xl">View projects</p>
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