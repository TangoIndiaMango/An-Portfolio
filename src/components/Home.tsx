import { Line } from '@/vectors';
import TypeWriterText from './TypeWriterText';

type Props = {}
const Home = (props: Props) => {
    return (
        <div className="w-full h-screen relative">
            {/* Blurred circular background */}
            <div className="absolute w-[40%] h-[40%] md:w-[50%] md:h-[50%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFEF61] rounded-full blur-[90px] z-0" />

            {/* Content container */}
            <div className="w-full p-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
                {/* Content */}
                <h1 className="font-sunroll text-4xl md:text-6xl font-bold">
                    <TypeWriterText />
                </h1>
                <div className='mt-16' />
                <div className="flex flex-col items-center justify-center my-8 md:my-10">
                    <p className="font-sunroll text-xl md:text-2xl">View projects</p>
                    <Targetter gotoAbout={() => { }} />
                </div>
            </div>
        </div>
    );
};



const Targetter = ({
    gotoAbout,
    notMt = false,
}: {
    gotoAbout?: () => void;
    notMt?: boolean;
}) => (
    <div className='z-10'>
        <Line />
    </div>
);

export default Home