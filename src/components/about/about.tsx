import React, { FC } from 'react';
import './about.css';

interface AboutProps {}

const About: FC<AboutProps> = () => (
  <div className="about" data-testid="About">
    About Component
  </div>
);

export default About;
