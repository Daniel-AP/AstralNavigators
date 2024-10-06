import cloudsTexture from '../assets/lyra.png'; // Correctly importing the image

export const Card = () => {

    return (
        <div className='flex flex-col w-2/5'>
            <h1>
                Lyra
            </h1>
            <img className='w-full lg:w-2/5 self-center' src={cloudsTexture} />
            <p>
                It The name refers to Orpheus’ lyre, which enchanted even Hades. After Orpheus’ death, the lyre was thrown into the ocean, and Zeus sent his eagle to retrieve it.

                Its brightest star is Vega, which ranks as the 5th brightest star in the night sky. Vega is also one of the closest stars to our solar system, located only 25 light-years away. Other notable stars in this constellation include Aladfar, Sulafat (meaning “turtle”), and Sheliak (also associated with a “turtle”).

                Visual magnitudes* of the stars in the Lyra constellation:

                • Vega: 0.03
                • Sulafat: 3.24
                • Sheliak: 3.45
                • Aladfar: 4.39

                *Visual magnitude measures how bright a star appears; the smaller the number, the brighter the star.
            </p>
        </div>
    )

}