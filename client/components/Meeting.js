import React from 'react'

export default function Meeting() {
  return (
    <div>
      {/* <!-- Calendly inline widget begin --> */}
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/armijojake/meeting"
        // style="min-width:320px;height:630px;"
      ></div>
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
      ></script>
      {/* <!-- Calendly inline widget end --> */}
    </div>
  )
}
