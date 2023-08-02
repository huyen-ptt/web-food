import moment from 'moment';
export function formatTime(timestamp){
   return  moment(timestamp).format('MMMM Do YYYY, h:mm a');
   // return  moment(timestamp).format('L');
}