import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let projects = [
      { id: 1, 
        name: "Digital Genius",
        previewImg: '/app/assets/projects-images/preview-1.png',
        description: "Corporate website for company that brings practical applications of artificial intelligence into the customer service operations of global companies. On website you can find more information about company, it's product, find it's contacts and send message to it.",
        imageSrc: '/app/assets/projects-images/image-1.jpg',
        technologies: 'Bootstrap, CSS animations, jQuery, jQuery UI, Google Maps API, CoffeeScript, Slim, Sass.',
        link: 'http://digitalgenius.com/'
      },
      { id: 2, 
        name: "Mealz",
        previewImg: '/app/assets/projects-images/preview-2.jpg',
        description: 'Mealz is a cooking platform that allows culinary experts to add, share and sell their recipes and meal plans; and allows health conscious users - to discover them with ease. Mealz is making it easy to cook healthy, delicious meals every day. From virtual cookbooks to purpose-built recipe planner, Mealz platform enables cooks from around the world to discover and share great recipes.',
        imageSrc: '/app/assets/projects-images/image-2.jpg',
        technologies: 'Ruby on Rails, Bootstrap, CSS animations, jQuery, AJAX, CoffeeScript, Slim, Sass.',
        link: 'https://mealz.com/'
      },
      { id: 3, 
        name: "Launching social",
        previewImg: '/app/assets/projects-images/preview-3.jpg',
        description: 'It is a crowd-speaking platform for Film, Music and Product launches, that allows a marketer to invite fans, stakeholders and colleagues to pre-commit and schedule posts about your launch in advance. It gives the security of knowing how many people will support your launch well in advance.',
        imageSrc: '/app/assets/projects-images/image-3.jpg',
        technologies: 'Ruby on Rails, Bootstrap, CSS animations, jQuery, AJAX, CoffeeScript, Slim, Sass.',
        link: 'https://www.launchingsocial.com/'
      },
      { id: 4, 
        name: "Seal Jobs",
        previewImg: '/app/assets/projects-images/preview-4.png',
        description: 'Seal is an online recruitment platform that connects recruiters and job seekers in an efficient and innovative way. Seal Jobs publishes jobs ranging from a few hours to multiple days, fixed period and indefinite period (with a run-in period on an interim basis) and internships. Seal Jobs currently focuses on the following sectors: Administration, Logistics, Cleaning, Hospitality ,Retail, Promo, Callcenter, Sales, Marketing, IT.',
        imageSrc: '/app/assets/projects-images/image-4.jpg',
        technologies: 'Ruby 2.2.4, Rails 4.2.6, PostgreSQL, JS, jQuery, AJAX, SASS, Semantic UI, Bootstrap',
        link: 'https://www.seal-jobs.com/'
      },
      { id: 5, 
        name: "Burning Buttons",
        previewImg: '/app/assets/projects-images/preview-5.png',
        description: 'Corporate website for one of the best IT company of Sibiria. It has greate experience in web and mobile development and work with foreign customers. Website contain information about company, their services, contacts and form for sending message to its email.',
        imageSrc: '/app/assets/projects-images/image-5.jpg',
        technologies: 'SASS, CSS animations, JS animations, AJAX, jQuery',
        link: 'https://burningbuttons.com/'
      },
      { id: 6, 
        name: "Russian Film Week",
        previewImg: '/app/assets/projects-images/preview-6.png',
        description: 'Website of Russian Film Week in London 2016. It contains programm of festival and infomation of attendees list.',
        imageSrc: '/app/assets/projects-images/image-6.png',
        technologies: 'SASS, CSS animations, jQuery, AJAX',
        link: 'http://russianfilmweek.org/'
      }
    ];
    let skills = [
      { id: 1,
        name: 'HTML',
        level: '90',
        passion: '80'
      },
      { id: 2,
        name: 'CSS/SASS/LESS',
        level: '85',
        passion: '90'
      },
      { id: 3,
        name: 'JS/jQuery',
        level: '80',
        passion: '88'
      },
      { id: 5,
        name: 'Ajax',
        level: '85',
        passion: '88'
      },
      { id: 6,
        name: 'Angular JS',
        level: '60',
        passion: '70'
      },
      { id: 7,
        name: 'Angular 2',
        level: '75',
        passion: '95'
      },
      { id: 8,
        name: 'React JS',
        level: '60',
        passion: '90'
      }
    ]
    return {projects, skills};
  }
}