import { Project } from '../app/models/project.model';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Charging Station Management System',
    description: 'Part of a CSMS project using OCPP 1.6 protocol with tech such as Kafka, Socket, Nginx, Docker, Nginx, Jenkins, NestJS, Angular',
  
  },
  {
    id: 2,
    title: 'IoT FOTA Updates',
    description: 'Implemented AWS IoT Core integration with MQTT for over-the-air (FOTA) updates for IoT devices.',
     
  },
  {
    id: 3,
    title: 'Angular Conversion PoC',
    description: 'Part of a project responsible for checking feasiblity of converting a WPF C# project to Angular with changes to the NodeJS backend for correct integration',
     
  },
  {
    id: 4,
    title: 'IEP',
    description: 'Part of the team to support a live project',
     
  },
  {
    id: 5,
    title: 'CI/CD Pipeline Setup',
    description: 'Implemented a CI/CD pipeline using Jenkins and Docker for automated deployment.',
     
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description: 'Created a personal portfolio website using Angular, lazy loading and NgRx, showcasing skills, projects, and resume details.',
  },
];
