import cls from './Inputs.module.scss';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label: string;
    id: string;
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}
export const InputText = (props: InputProps) => {
    const {
        label, 
        id,
        onChange,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e);
    };

    return (
        <div className={cls.Input}>
            <label htmlFor={id}>{label}</label>
            <input 
                type="text" 
                id={id} 
                onChange={onChangeHandler} 
                {...otherProps}
            />
        </div>
    );
};