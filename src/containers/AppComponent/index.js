import React, {Component} from 'react';
import Parser from 'html-react-parser';
import logo from './assets/images/logo.svg';
import frontBg from './assets/images/bg.jpg';
import './assets/AppComponent.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Jumbotron
} from 'reactstrap';
import 'animate.css';
import { Link } from 'react-scroll'

import BadgePreview from '../../components/BadgePreview/BadgePreview';
import Preloader from '../../components/Preloader/Preloader';
import SocialNetwork from '../../components/SocialNetwork/SocialNetwork'
import Portfolio from '../../components/Portfolio/Portfolio';
import projects from '../../projects.js';

class App extends Component {
    constructor(props) {
        super(props);

        this.toggleMenu = this.toggleMenu.bind(this);
        this.openProject = this.openProject.bind(this);
        this.closeProject = this.closeProject.bind(this);
        this.state = {
            loaded: false,
            isOpen: false,
            headerStick: false,
            touchDevice: false,
            projectId: ''
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleHeaderScroll.bind(this));

        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
             this.setState({ touchDevice: true })
        }

        setTimeout(() => this.setState({ loaded: true }), 1500);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleHeaderScroll.bind(this));
    }
    handleHeaderScroll(event) {
        var cpTop = this.getCurrentScroll(),
            shrinkHeader = window.innerHeight/2;

        if ( cpTop >= shrinkHeader ) {
           this.setState({headerStick : true});
        }
        else {
            this.setState({headerStick : false});
        }
    }
    getCurrentScroll(){
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    }
    toggleMenu() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }
    openProject(id){
        this.setState({
          projectId: id
        });
    }
    closeProject(){
        this.setState({
          projectId: ''
        });
    }
    render() {
        return (
            <div className={"app " + (this.state.touchDevice ? " touch" : "")}>
            <Preloader loaded={this.state.loaded}/>
            <header className={"app__header header "+(this.state.headerStick || this.state.isOpen ? "header--sticky" : "")}>
                <Navbar color="faded" dark expand="md">
                    <NavbarBrand href="/"><img src={logo} className="app-logo" alt="logo"/></NavbarBrand>
                    <NavbarToggler onClick={this.toggleMenu}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="about" spy={true} smooth={true} offset={0} duration={500} className="nav-link">About</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="portfolio" spy={true} smooth={true} offset={0} duration={500} className="nav-link">Portfolio</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="contact" spy={true} smooth={true} offset={0} duration={500} className="nav-link">Contact</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </header>
            <section className="app__front front" style={{backgroundImage: 'url('+frontBg+')'}}>
                <BadgePreview/>
                <div className="front-arrow-down">
                    <Link to="about" spy={true} smooth={true} offset={0} duration={500}><i className="mdi mdi-chevron-down"></i></Link>
                </div>
            </section>
            <section className="app__about about" id="about" ref={(section) => { this.sectionAbout = section; }}>
                <Container>
                    <Row>
                        <Col>
                            <h2 className="section__title about__title">About me</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" md="4" lg="4">
                            <h3 className="about__subtitle">Profile</h3>
                        </Col>
                        <Col xs="12" md="8" lg="8">
                            <p className="about__text">I'm Team Lead with 6 years experience of frontend: 3 years in IT-outsourcing development and 3 years in product development. My solutions help companies to become better, to optimize process and to reach business purposes. After 6 years in programming I want to apply my skills in business management and to go way from IT-specialist to entrepreneur. My solutions help companies to become better, to optimize process and to reach business purposes. After 6 years in programming I want to apply my skills in business management and to go way from IT-specialist to entrepreneur. I'm interested in any knowledges which I can use on this way, such as a people management, product management, marketing and sales. I'm sure that to be the best at what you do, you need to have breadth of vision.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" md="4" lg="4">
                            <h3 className="about__subtitle">Education</h3>
                        </Col>
                        <Col xs="12" md="8" lg="8">
                            <h5 className="about__education-title">"Team Lead" course<span>Otus "Online Education" - 2020</span></h5>
                            <p className="about__text">In the education final step I defend diploma project on the topic of "Implementation of product metrics" <a rel="noopener noreferrer" href="https://cdn.otus.ru/media/public/b0/7a/b07aee_%D0%A0%D0%BE%D0%BC%D0%B0%D0%BD_%D0%A8%D0%BF%D1%80%D0%B5%D0%BD%D0%B3%D0%B5%D1%80__course_certificate__Team_Lead____OTUS.pdf" target="_blank">Link to certificate of ending the course</a></p>
                            <h5 className="about__education-title">Master of Technology, Computer science<span>Omsk State Technical University - 2015</span></h5>
                            <p className="about__text">Faculty of elite education and magistracy, majoring in "Computer analysis and data interpretation", master of science.</p>
                            <h5 className="about__education-title">Master of Technology, Automation and Robotics<span>Omsk State Technical University - 2013</span></h5>
                            <p className="about__text">Omsk State Technical University. Faculty of Information Technology and Computer Systems, majoring in "Automation and Robotics", bachelor of science.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" md="4" lg="4">
                            <h3 className="about__subtitle">Technical<br/>Expertise</h3>
                        </Col>
                        <Col xs="12" md="8" lg="8">
                            <Row>
                                <Col xs={{ size: 12 }} md={{ size: 6 }} lg="4" className="order-md-1 order-lg-1">
                                    <h5 className="about__expertise-title">Professional skillset</h5>
                                </Col>
                                <Col xs={{ size: 12 }} md={{ size: 6 }} lg="4" className="order-md-3 order-lg-4">
                                    <ul className="about__expertise-list">
                                        <li>W3C Validated HTML5</li>
                                        <li>BEM/CSS3 via Sass/Stylus/Less</li>
                                        <li>Javascript</li>
                                    </ul>
                                </Col>
                                <Col xs={{ size: 12 }} md={{ size: 6 }} lg="4" className="order-md-2 order-lg-2">
                                    <h5 className="about__expertise-title">Working knowledge</h5>
                                </Col>
                                <Col xs={{ size: 12 }} md={{ size: 6 }} lg="4" className="order-md-4 order-lg-5">
                                    <ul className="about__expertise-list">
                                        <li>React JS, Redux, Next JS</li>
                                        <li>Chrome extensions</li>
                                        <li>Bundlers (Webpack, Gulp)</li>
                                    </ul>
                                </Col>
                                <Col xs={{ size: 12 }} md={{ size: 12 }} lg="4" className="order-md-5 order-lg-3">
                                    <h5 className="about__expertise-title">Tools</h5>
                                </Col>
                                <Col xs={{ size: 12 }} md={{ size: 12 }} lg="4" className="order-md-6 order-lg-6">
                                    <ul className="about__expertise-list">
                                        <li>Atom/SublimeText 3</li>
                                        <li>Github</li>
                                        <li>iTerm</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" md="4" lg="4">
                            <h3 className="about__subtitle">Management<br/>Expertise</h3>
                        </Col>
                        <Col xs="12" md="8" lg="8">
                            <Row>
                                <Col xs={{ size: 12 }} md={{ size: 6 }} lg="4" className="order-md-1 order-lg-1">
                                    <h5 className="about__expertise-title">Soft skills</h5>
                                </Col>
                                <Col xs={{ size: 12 }} md={{ size: 6 }} lg="4" className="order-md-3 order-lg-4">
                                    <ul className="about__expertise-list">
                                        <li>Leadership</li>
                                        <li>Communicability</li>
                                        <li>Analytical mind</li>
                                    </ul>
                                </Col>
                                <Col xs={{ size: 12 }} md={{ size: 6 }} lg="4" className="order-md-2 order-lg-2">
                                    <h5 className="about__expertise-title">Team interaction</h5>
                                </Col>
                                <Col xs={{ size: 12 }} md={{ size: 6 }} lg="4" className="order-md-4 order-lg-5">
                                    <ul className="about__expertise-list">
                                        <li>Goal setting (SMART)</li>
                                        <li>Recruitment and growth of team members</li>
                                        <li>Delegation and control of quality and terms</li>
                                        <li>Conflict resolution</li>
                                    </ul>
                                </Col>
                                <Col xs={{ size: 12 }} md={{ size: 12 }} lg="4" className="order-md-5 order-lg-3">
                                    <h5 className="about__expertise-title">Tools of people management</h5>
                                </Col>
                                <Col xs={{ size: 12 }} md={{ size: 12 }} lg="4" className="order-md-6 order-lg-6">
                                    <ul className="about__expertise-list">
                                        <li>1-on-1</li>
                                        <li>Agile</li>
                                        <li>Feedback</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="app__portfolio portfolio" id="portfolio" ref={(section) => { this.sectionPortfolio = section; }}>
                <Container>
                    <Row>
                        <Col><h2 className="section__title portfolio__title">Portfolio</h2></Col>
                    </Row>
                    <Portfolio projects={projects} openProject={this.openProject}/>
                </Container>
            </section>
            <footer id="contact" className="app__footer footer app__contact contact" ref={(section) => { this.sectionContact = section; }}>
                <Container>
                    <Row>
                        <Col xs="12" md="6" lg="5">
                            <div className="footer__info">
                                <h3 className="footer__subtitle">Info</h3>
                                <p>Location: Moscow, Russia</p>
                                <p>Email: shprengerroman@gmail.com</p>
                                <p>Skype: shprenger1</p>
                            </div>
                            <div className="footer__socials">
                                <h3 className="footer__subtitle">Social Network</h3>
                                <div className="contact__socials">
                                    <SocialNetwork inverse="inverse"/>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" md="6" lg="7">
                            <h3 className="footer__subtitle">Send message</h3>
                            <Form action="https://formspree.io/shprengerroman@gmail.com" method="POST">
                                <FormGroup>
                                  <Label for="mesName">Your name</Label>
                                  <Input id="mesName" type="text" name="name" required/>
                                </FormGroup>
                                <FormGroup>
                                  <Label for="mesEmail">Email</Label>
                                  <Input type="email" name="_replyto" id="mesEmail" required/>
                                </FormGroup>
                                <FormGroup>
                                  <Label for="mesText">Message</Label>
                                  <Input type="textarea" name="message" id="mesText" required/>
                                </FormGroup>
                                <Button size="md" color="bg-light" type="submit">Send</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </footer>
            <Modal isOpen={this.state.projectId !== '' ? true : false} toggle={this.closeProject} className={"app__modal animated " + (this.state.projectId !== '' ? "fadeInRight" : "fadeOutRight")}>
                {
                    this.state.projectId !== '' ?
                        <Row className="h-100">
                            <Col xs="12" md="6" className="pr-md-0 pr-lg-0 pr-xl-0 hidden-sm-down">
                                <div className="modal__bg" style={{backgroundImage: 'url('+projects[this.state.projectId].img+')'}}></div>
                            </Col>
                            <Col xs="12" md="6" className="pl-md-0 pl-lg-0 pl-xl-0">
                                <Jumbotron>
                                    <ModalHeader toggle={this.toggle}>{projects[this.state.projectId].name}</ModalHeader>
                                    <ModalBody>
                                        <h5 className="modal__subtitle">Description</h5>
                                        <p>{Parser(projects[this.state.projectId].description)}</p>
                                        <h5 className="modal__subtitle">Technologies</h5>
                                        <p>{projects[this.state.projectId].stack}</p>
                                    </ModalBody>
                                    <ModalFooter>
                                      <NavLink className="btn btn-link" href={projects[this.state.projectId].link} target="_blank">Visit website</NavLink>
                                      <Button color="link" onClick={this.closeProject}>Back</Button>
                                    </ModalFooter>
                                </Jumbotron>
                            </Col>
                        </Row> : ""
                }
            </Modal>
        </div>);
    }
}

export default App;
