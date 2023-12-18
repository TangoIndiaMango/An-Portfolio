import Typewriter from 'typewriter-effect';



const TypeWriterText = () => {
    return (
        <div className='w-full flex items-center justify-center'>
            <Typewriter
                options={{
                    loop: true,
                }} 
                onInit={(typewriter) => {
                    typewriter
                        .typeString("HeY THeRe! I’m an-najaat, a UI/UX Designer")
                        .pauseFor(10000)
                        .deleteAll()
                        .start();
                }}
            />
        </div>
    );
};

export default TypeWriterText;
