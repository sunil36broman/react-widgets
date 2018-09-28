import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { instanceId } from './util/widgetHelpers'

const propTypes = {
  className: PropTypes.string,
  role: PropTypes.string,
  nodeRef: PropTypes.func,
  emptyListMessage: PropTypes.node,
}

class Listbox extends React.Component {
  render() {
    let {
      className,
      role,
      children,
      emptyListMessage,
      nodeRef,
      ...props
    } = this.props
    let id = instanceId(this)

    return (
      <div
        id={id}
        tabIndex="-1"
        ref={nodeRef}
        className={cn(className, 'rw-list')}
        role={role === undefined ? 'listbox' : role}
        {...props}
      >
        {React.Children.count(children) ? (
          children
        ) : (
          <div className="rw-list-empty">{emptyListMessage}</div>
        )}
      </div>
    )
  }
}

Listbox.propTypes = propTypes

export default Listbox
