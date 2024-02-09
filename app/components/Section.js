import React from 'react';
import { colorClasses } from '../utils/theme';

const Section = ({ color = 'regal-blue', children, className = '' }) => {
    const colorClass = colorClasses[color] || colorClasses['regal-blue'];
    return <div className={`pc:h-screen ${colorClass} ${className}`}>{children}</div>;
};

export default Section;