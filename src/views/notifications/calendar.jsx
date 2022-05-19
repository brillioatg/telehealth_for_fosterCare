import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import Notify from './Notify'
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
export default class Calender extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        const {patient,doctor} = props;
        
        this.data = [{
                Id: 2,
                Subject: 'Meeting with Eunice461 Strosin214 ',
                StartTime: new Date(2022, 5, 16, 10, 0),
                EndTime: new Date(2022, 5, 16, 12, 30),
                IsAllDay: false,
                Status: 'Completed',
                Priority: 'High',
                location:'https://us04web.zoom.us/j/71832413497?pwd=N7RTCi_tdX0RFn1aZ6UeNZAR1v3YMI.1'
            },
            {
                Id: 3,
                Subject: 'Meeting with Cristobal567 Nikolaus26',
                StartTime: new Date(),
                EndTime: new Date(),
                IsAllDay: true,
                Status: 'Pending',
                Priority: 'High',
                Location:'https://us04web.zoom.us/j/71832413497?pwd=N7RTCi_tdX0RFn1aZ6UeNZAR1v3YMI.1'
            },
            {
                Id: 4,
                Subject: 'Meeting with Arthur650 Jacobs452',
                StartTime: new Date(),
                EndTime: new Date(),
                IsAllDay: false,
                Status: 'Pending',
                Priority: 'High',
                Location:'https://us04web.zoom.us/j/71832413497?pwd=N7RTCi_tdX0RFn1aZ6UeNZAR1v3YMI.1'
            }
        ];
    }
    render() {
        return (
        <>
        <ScheduleComponent height='550px' currentView='Month' eventSettings={{ dataSource: this.data,
            fields: {
                id: 'Id',
                subject: { name: 'Subject' },
                isAllDay: { name: 'IsAllDay' },
                startTime: { name: 'StartTime' },
                endTime: { name: 'EndTime' }
            }
        }}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
    </ScheduleComponent>;
    </>
    )
    }
}