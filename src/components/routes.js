
    import React from 'react';
    import { Switch, Route } from 'react-router-dom'
    import Page1 from './page1'
    import Page2 from './page2'
    
    const Main = () => (
        <Switch>
            <Route exact path="/" component={Page1}/>
            <Route path="/page-2" component={Page2}/>
        </Switch>
    )

    export default Main
