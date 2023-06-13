import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Custom Software Development',
        description: 'We specialize in developing custom software applications to the specific needs of our clients. Our team of experienced developers work closely with our clients to understand their requirements and develop solutions that are tailored to their needs.'
    },
    {
        icon: <FiLayers />,
        title: 'Web Development',
        description: 'We offer web development services that include designing, developing, and maintaining websites. Our team of designers and developers work together to create websites that are user-friendly, responsive, and visually appealing.'
    },
    {
        icon: <FiUsers />,
        title: 'Mobile App Development',
        description: 'We offer mobile application development services for both iOS and Android platforms. Our team of developers are well-versed in developing mobile applications that are intuitive, user-friendly, and feature-rich.'
    },
    { 
        icon: <FiMonitor />,
        title: 'Cloud Solutions',
        description: 'We offer cloud solutions that help our clients to store, manage, and access their data securely from anywhere in the world. Our team of experts are well-versed in cloud technologies and can help our clients to migrate their existing applications to the cloud.'
    },
    {
        icon: <FiUsers />,
        title: 'Software Testing & QA',
        description: 'We offer software testing and quality assurance services that ensure that the software applications developed by us meet the highest quality standards. Our team of testers use the latest testing tools and techniques to test the software applications thoroughly.'
    },
    { 
        icon: <FiMonitor />,
        title: 'Maintenance and Support',
        description: 'We offer maintenance and support services that ensure that the software applications developed by us continue to function smoothly. Our team of experts are available round-the-clock to address any issues that our clients may face with their software applications.        '
    }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href="/service-details">
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
