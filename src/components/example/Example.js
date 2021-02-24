
import ClassComponent from '../ClassComponent';
import Component from '../Component';


function Example() {


    const productList = [
        {
            image: 'https://images.all-free-download.com/images/graphicthumb/weather_symbols_clip_art_17459.jpg',
            title: 'WEATHER',
            description: 'We’re setting a new benchmark in the weather industry. The radio occultation profiles collected by our satellites bring a unique understanding of global weather conditions. Our forecast data helps our customers reduce operational risks and make informed decisions.',
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ91_xs4oozXiUJmmJEXsSFsUZLZmtEgBYFXA&usqp=CAU',
            title: 'EARTH INFORMATION',
            description: 'Spire uses its satellites to collect data from beneath the earth’s surface to the edge of the atmosphere. This rich data set is available to support research and development projects. You can experience our data and apply it to your unique use cases in a number of different ways.',
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEhFgFhEdQVwo2otuKzfXDh_5ZxgDvaVgQGQ&usqp=CAU',
            title: 'ORBITAL SERVICES',
            description: 'From the early stage of customer payload integration into our industry-leading LEMUR bus, to launch, in-orbit check out, long-term operations and data production, we provide an Orbital Service turnkey and worry-free. We do the heavy lifting so you can take care of your business and your customers.',
        }

        
    ]

    const getProducts = () => {
        const products = productList.map((product, index) => {
            return <Component
                key={index}
                image={product.image}
                title={product.title}
                description={product.description}
            />
        })
        return products
    }


    return (
        <>
            <div className="row">
                <ClassComponent />
            </div>
            <div className="container-fuild">
                <div className="row">
                    {getProducts()}
                </div>
            </div>
        </>
    );
}

export default Example;
