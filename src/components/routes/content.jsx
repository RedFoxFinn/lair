import React from 'react';
import {
    BrowserRouter as Router,
    Switch, Route, Link
} from 'react-router-dom';
import Landing from './landing/landing';
import About from './about/about';

const routes = [
    {
        path: '/',
        component: Landing
    }
];