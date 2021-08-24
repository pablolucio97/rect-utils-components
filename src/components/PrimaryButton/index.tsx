import PrimaryButtonProps from '../../types/SecondaryButtonProps'
import { Button } from './styles'

const PrimaryButton = ({ label, style, showPressedEffect, buttonStyle }: PrimaryButtonProps) => {
    return (
        <Button
            label={label}
            style={style}
            showPressedEffect={showPressedEffect}
            buttonStyle={buttonStyle}
        >
            {label}
        </Button>
    )
}

export { PrimaryButton }