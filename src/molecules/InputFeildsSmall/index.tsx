import { TextField } from '@mui/material'

type TxtFeildProps = {
    label: string,
    name: string,
    value: string | number | null,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const TextInpSmall = ({ label, name, value, onChange }: TxtFeildProps) => {
    return (
        <TextField
            label={label}
            name={name}
            margin="normal"
            value={value}
            onChange={onChange}
        />
    )
}

export default TextInpSmall