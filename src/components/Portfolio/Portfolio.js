import React from 'react';
import './assets/Portfolio.css';

class Protfolio extends React.Component {

    render() {
        var openProject = this.props.openProject;
        let projects = this.props.projects.map(function(item, i) {
            return (<div key={i} className={item.class + " portfolio__col"}>
                <div className="portfolio__item">
                    <a onClick={openProject.bind(this, item.id)} data-id={item.id} className="portfolio__preview preview" style={{
                            backgroundImage: 'url(' + item.img + ')'
                        }}>
                        <div className="preview__content">
                            <h2 className="preview__title">{item.name}<span>Read more</span>
                            </h2>
                        </div>
                    </a>
                </div>
            </div>)
        });
        return <div className="portfolio">
            <div className="row">
                <div className="col">
                    <div className="portfolio__row">
                        {projects}
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Protfolio;
