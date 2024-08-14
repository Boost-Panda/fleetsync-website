import { useEffect } from 'react';

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="max-w-[800px] mx-auto">
      {/* <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/nauroz/botterfly-early-adopter-program?hide_event_type_details=1"
      style={{ minWidth: '320px', height: '700px' }}
    ></div>
    <!-- Google Calendar Appointment Scheduling begin --> */}
      <iframe
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1hqz3ENA9mbtIsGoWYa9H3jIH--8E4ie9-SUk10ehEh8vNKv7pbs7kRhhJijH6EdjLSVIoNa8B?gv=true"
        style={{ border: '0' }}
        className="w-full h-[75rem]"
      ></iframe>
    </div>
  );
};

export default CalendlyWidget;
