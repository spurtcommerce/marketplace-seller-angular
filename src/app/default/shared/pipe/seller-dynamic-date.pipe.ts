import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { DateService } from '../components/service/date.service';
import * as moment from 'moment-timezone';
@Pipe({
  name: 'sellerDynamicDate'
})
export class SellerDynamicDatePipe implements PipeTransform {
 

  transform(value: unknown): unknown {

    const timeFormatPreference = JSON.parse(localStorage.getItem('timeFormate')) == '24 hrs' ? false : true;

    const is12HourFormat = timeFormatPreference;  // false = 24-hour format, true = 12-hour format

    // Set the format for time based on the user's preference
    const timeFormat = is12HourFormat ? 'hh:mm A' : 'HH:mm';  // 12-hour format with AM/PM or 24-hour format

    // Fetch date format from localStorage (e.g., 'YYYY-MM-DD', 'DD/MM/YYYY', etc.)
    const dateFormat = JSON.parse(localStorage.getItem('dateTimeFormate')) || 'YYYY-MM-DD';  // Default to 'YYYY-MM-DD' if not set

    // Set the full date-time format by combining the date and time formats
    const fullFormat = `${dateFormat} ${timeFormat}`;

    // Fetch the user's selected time zone
    const timeZone = JSON.parse(localStorage.getItem('timeZone')) || 'UTC';  // Default to UTC if no time zone is set

    // Convert the UTC value to the selected time zone and format it based on user preferences
    const formattedTime = moment(value)?.tz(timeZone)?.format(fullFormat);
    return formattedTime;
}



}