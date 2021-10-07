import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './home/index';
import Detalhes from './detalhes/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/detalhe" component={Detalhes} />
            </Switch>
        </BrowserRouter>
    );
}