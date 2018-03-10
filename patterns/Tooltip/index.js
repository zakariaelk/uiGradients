import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TooltipBase = styled.div`
  position: relative;

  &:before,
  &:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-in-out;
    position: absolute;
    z-index: 10;
    transform-origin: top;
    bottom: auto;
    left: 50%;
    top: 100%;
    transform: translate(-50%, -10px);
  }

  &:after {
    background: rgba(17, 17, 17, 0.9);
    border-radius: 4px;
    color: #fff;
    content: '${ props => props.label }';
    font-size: 12px;
    padding: .5em 1em;
    white-space: nowrap;
    margin-top: 11px;
  }

  &:before {
    background: url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba%2817,%2017,%2017,%200.9%29%22%20transform%3D%22rotate%28180%2018%206%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E') no-repeat;
    background-size: 100% auto;
    height: 6px;
    width: 18px;
    margin-top: 5px;
    margin-bottom: 0;
    content: '';
  }

  &:hover:before,
  &:hover:after {
    opacity: 1;
    pointer-events: auto;
    transform: translate(-50%, 0);
  }
`

const Tooltip = ({ children, label }) => {
  return (
    <TooltipBase label={ label }>
      {children}
    </TooltipBase>
  )
}

Tooltip.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node
}

Tooltip.defaultProps = {
  label: null,
  children: null
}

export default Tooltip
export { TooltipBase }
