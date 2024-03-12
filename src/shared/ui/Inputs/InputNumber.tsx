import cls from './Inputs.module.scss';
interface NumberProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label: string;
    id: string;
    value?: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const InputNumber = (props: NumberProps) => {
    const {
        label, 
        id,
        value = 0,
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
                type="number" 
                id={id} 
                onChange={onChangeHandler} 
                value={(value > 0) ?  value : ''}
                {...otherProps}
            />
        </div>
    );
};