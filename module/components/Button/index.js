import React from 'react';
import classNames from 'classnames';
import { Button as ReactstrapButton } from 'reactstrap';

/**
 * Default button
 */
export default class Button extends React.Component {
   constructor(props) {
        super(props);
   }
    
   render () {
        const { classes,
               component,
               dense,
               disableFocusRipple,
               disableRipple,
               disabled,
               fab,
               href,
               raised,
               color,
               outline,
               size
             } = this.props;
       
        const Component = component || 'button';
       
        let defaultClasses = '';
       
        return (
            <ReactstrapButton className={ classNames(classes, defaultClasses) } color={ color } outline={ outline } size={ size }>{ this.props.children }</ReactstrapButton>
        );
   }
}