import { Component } from 'react';
import { Container } from 'react-bootstrap';

let headerClassName = "display-5 text-left mx-auto mb-4";
let paragraphClassName = "mb-5 lead"

export default class Changelog extends Component {
    render() {
        return (<Container>
            <div className="text-center mx-auto px-3 py-3 mb-3">
                <h1 className="display-4">
                    Changelog
                </h1>
            </div>
            
            <h3 className={headerClassName}>v1.1</h3>
            <ul className={paragraphClassName}>
                <li>Added this changelog :D</li>
                <li>Add loading bar indicator for updating the user on what operations are occurring</li>
                <li>Improve color scheme list sizing on mobile view</li>
                <li>Added limits to the day menu size</li>
                <li>Fixed bug where dragging in the day menu would result in closing the menu</li>
                <li>TODO</li>
            </ul>

            <h3 className={headerClassName}>v1.0</h3>
            <ul className={paragraphClassName}>
                <li>Initial release of the program!</li>
            </ul>
        </Container>);
    }
}
