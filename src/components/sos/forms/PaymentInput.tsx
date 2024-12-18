import { UseFormRegister } from 'react-hook-form';
import { FormData } from '@/types/Sos';

interface PaymentInputProps {
    register: UseFormRegister<FormData>;
    paymentType: FormData['paymentType'];
    getInputStyle: (fieldName: keyof FormData) => string;
}

export default function PaymentInput({
    register,
    paymentType,
    getInputStyle,
}: PaymentInputProps) {
    return (
        <input
            type="number"
            {...register('price', {
                required: paymentType !== 'NEGOTIABLE',
                min: {
                    value: 0,
                    message: '0원 이상 입력해주세요',
                },
                valueAsNumber: true,
            })}
            className={getInputStyle('price')}
            placeholder="금액을 입력하세요"
            disabled={paymentType === 'NEGOTIABLE'}
            step="100"
        />
    );
}
