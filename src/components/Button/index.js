import PropTypes from "prop-types"

import "./style.scss"

export const BUTTON_TYPES = {
  DEFAULT: 1,
  SUBMIT: 2,
}

const Button = ({
  title = "",
  onClick = () => null,
  type = BUTTON_TYPES.DEFAULT,
  disabled = false,
  children = null,
}) => {
  switch (type) {
    case BUTTON_TYPES.DEFAULT:
      return (
        <button
          type="button"
          disabled={disabled}
          className="Button"
          data-testid="button-test-id"
          onClick={onClick}
          title={title}
        >
          {children}
        </button>
      )
    case BUTTON_TYPES.SUBMIT:
      return (
        <input
          disabled={disabled}
          className="Button"
          type="submit"
          data-testid="button-test-id"
          value={children}
          onClick={onClick}
          title={title}
        />
      )
    default:
      return (
        <button
          type="button"
          disabled={disabled}
          className="Button"
          data-testid="button-test-id"
          onClick={onClick}
          title={title}
        >
          {children}
        </button>
      )
  }
}

// eslint-disable-next-line react/no-typos
Button.propTypes = {
  title: PropTypes.string, // eslint-disable-line react/require-default-props
  onClick: PropTypes.func, // eslint-disable-line react/require-default-props
  type: PropTypes.number, // eslint-disable-line react/require-default-props
  disabled: PropTypes.bool, // eslint-disable-line react/require-default-props
  children: PropTypes.node, // eslint-disable-line react/require-default-props
}

export default Button
