import { Line } from '@/vectors';

type Props = {}

const Home = (props: Props) => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center font-sunroll p-24">
            <div className='flex flex-col items-center justify-center z-10 text-3xl text-center sm:text-6xl'>
                <h1 className='lg:w-[80%] self-center'>
                    HeY THeRe! I’m an-najaat a ui/ux Designer
                </h1>
            </div>
            <div aria-label='hidden' className='mt-16'></div>
            <div className='flex flex-col items-center justify-center'>
                <p className="z-10 mt-2 text-3xl">View projects</p>
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