/**
 *  @copyright 2025 codewithdeep
    @license Apache-2.0
*/ 

/**
 * Node modules
 */

import React from 'react'
import PropTypes from 'prop-types';

/**
 * Primary Button
 */

export const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes,
    flag
    }) => {
        const handleDownload = () => {
            const link = document.createElement('a');
            link.href = '/files/Deep_Bhatt_Full_Stack_Developer.pdf';
            link.download = 'Deep_Bhatt_CV.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          };

        if(href) {
            return (
                <a href={href} target={target} onClick={flag && handleDownload} className={`btn btn-primary ${classes}`}>
                    {label}
                    {icon ? <span className='material-symbols-rounded' aria-hidden='true'>
                        {icon}
                    </span> : undefined}
                </a>
            )
        }else {
            return (
                <button className={`btn btn-primary  ${ classes }`}>
                    {label}
                    {icon ? <span className='material-symbols-rounded' aria-hidden='true'>
                        {icon}
                    </span> : undefined}
                </button>
            )   
        }
    }


ButtonPrimary.propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    classes: PropTypes.string
}

export const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon,
    classes
    }) => {
        if(href) {
            return (
                <a href={href} target={target} className={`btn btn-outline ${classes}`}>
                    {label}
                    {icon ? <span className='material-symbols-rounded' aria-hidden='true'>
                        {icon}
                    </span> : undefined}
                </a>
            )
        }else {
            return (
                <button className={`btn btn-outline  ${ classes }`}>
                    {label}
                </button>
            )   
        }
    }


ButtonOutline.propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    classes: PropTypes.string
}