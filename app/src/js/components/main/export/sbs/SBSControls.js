import React from "react"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ReactBootstrapSlider from 'react-bootstrap-slider'

export class SBSConfig {
    constructor() {
        this.colorsTopMargin = 100;
        this.colorsLeftMargin = 0;
        this.colorsWidth = 50;
    }

    clone = () => {
        let config = new SBSConfig();
        config.colorsTopMargin = this.colorsTopMargin;
        config.colorsLeftMargin = this.colorsLeftMargin;
        config.colorsWidth = this.colorsWidth;
        return config;
    }
}

export class SBSExternalData {
    constructor() {
        this.colorsRef = React.createRef();
        this.colRef = React.createRef();
    }
}

export class SBSControls extends React.Component {
    
    changeColorSchemeTopMargin = (e) => {
        this.props.updateConfig("colorsTopMargin", e.target.value);
    }
    
    changeGutterWidth = (e) => {
        this.props.updateConfig("colorsLeftMargin", e.target.value);
    }
    
    changeColorSchemeWidth = (e) => {
        this.props.updateConfig("colorsWidth", e.target.value);
    }

    render() {
        let maxGutterWidth = 250;
        let maxTopMargin = 250;
        let maxWidth = 100;

        if(this.props.data.colorsRef.current != null && this.props.data.colRef.current != null) {
            let colorRect = this.props.data.colorsRef.current.getBoundingClientRect();
            let colRect = this.props.data.colRef.current.getBoundingClientRect();
            maxGutterWidth = Math.floor(colRect.width - colorRect.width - 50);
            maxTopMargin = Math.floor(colRect.height - colorRect.height - 20);
            maxWidth = Math.floor((colRect.width - this.props.config.colorsLeftMargin) * 100.0 / colRect.width);
        }

        console.log(maxWidth);

        return <React.Fragment>
            <Form.Group>
                <Form.Label as="h5">
                    Colors Top Margin (px)
                </Form.Label>
                <InputGroup className="justify-content-center mt-3">
                    <ReactBootstrapSlider
                        value={this.props.config.colorsTopMargin}
                        change={this.changeColorSchemeTopMargin}
                        step={1}
                        max={maxTopMargin}
                        min={0}
                    />
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <Form.Label as="h5">
                    Colors Left Margin (px)
                </Form.Label>
                <InputGroup className="justify-content-center mt-3">
                    <ReactBootstrapSlider
                        value={this.props.config.colorsLeftMargin}
                        change={this.changeGutterWidth}
                        step={1}
                        max={maxGutterWidth}
                        min={0}
                    />
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <Form.Label as="h5">
                    Colors Width (%)
                </Form.Label>
                <InputGroup className="justify-content-center mt-3">
                    <ReactBootstrapSlider
                        value={this.props.config.colorsWidth}
                        change={this.changeColorSchemeWidth}
                        step={1}
                        max={maxWidth}
                        min={5}
                    />
                </InputGroup>
            </Form.Group>
        </React.Fragment>
    }
}