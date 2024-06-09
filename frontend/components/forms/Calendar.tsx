'use client';
import {DateRange,Range,RangeKeyDict} from 'react-date-range';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface DatePickerProps {
    value:Range;
    onChange:(value:RangeKeyDict)=>void;
    bookedDate?:Date[];

}


const DatePicker:React.FC<DatePickerProps> = ({
    value,
    onChange,
    bookedDate}) => {
return(
    <DateRange className='w-full items-center font-semibold  border border-gray-400 rounded-xl mb-4'
    rangeColors={['#262626']} 
    ranges={[value]}
    date={new Date()}
    onChange={onChange}
    direction='vertical'
    showDateDisplay={false}
    minDate={new Date()}
    disabledDates={bookedDate}
    />
)
}

export default DatePicker;