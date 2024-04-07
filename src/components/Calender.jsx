import React from 'react'

const Calendar = () => {
  return (
    <div>
      <iframe
      src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FKolkata&bgcolor=%23616161&showTz=0&showPrint=0&mode=WEEK&src=Yjk3MmRhOTUzMGE4Mjk0YmQ0OGYwYmEwZWE4ZGI3Mzk1OWU1OTI1MDVlOTE0ZjMzMzY1MDYyZDUzYTYwM2I2Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23B39DDB"
      style={{ border: "solid 1px #777",
    border:"2px solid black",
  boxShadow:"black 2px 0px 2ch 0px",borderRadius:"5px"}}
      width="840"
      height="420"
      frameBorder={1}
      scrolling="no"
    ></iframe>
    </div>
  )
}

export default Calendar;