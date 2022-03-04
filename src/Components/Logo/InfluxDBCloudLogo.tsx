// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, InfluxColors} from '../../Types'

// Styles
import './InfluxDBCloudLogo.scss'

export interface InfluxDBCloudLogoProps extends StandardFunctionProps {
  /** Coloration of the SVG image */
  fill?: InfluxColors | string
  /** Controls rendering of optional "cloud" suffix */
  cloud: boolean
}

export type InfluxDBCloudLogoRef = SVGSVGElement

export const InfluxDBCloudLogo = forwardRef<
  InfluxDBCloudLogoRef,
  InfluxDBCloudLogoProps
>(
  (
    {
      id,
      fill = InfluxColors.White,
      style,
      cloud,
      testID = 'logo--influxdb-cloud',
      className,
    },
    ref
  ) => {
    const logoClass = classnames('', {
      'cf-logo--influxdb-cloud': cloud,
      'cf-logo--influxdb': !cloud,
      [`${className}`]: className,
    })

    const logoStyle = {fill, ...style}

    if (cloud) {
      return (
        <svg
          version="1.1"
          id={id}
          ref={ref}
          data-testid={testID}
          style={logoStyle}
          x="0px"
          y="0px"
          className={logoClass}
          viewBox="0 0 284 55"
          width="284"
          height="55"
        >
          <path
            d="M4.4,20.5c-1.1,0-2-0.4-2.8-1.1c-0.7-0.7-1.1-1.6-1.1-2.6c0-1.1,0.4-1.9,1.1-2.6c0.8-0.7,1.7-1.1,2.8-1.1
            c1.1,0,2,0.4,2.7,1.1c0.7,0.7,1.1,1.5,1.1,2.6c0,1-0.4,1.9-1.1,2.6C6.3,20.1,5.4,20.5,4.4,20.5z M0.9,43V23.5h6.8V43H0.9z M12.4,43
            V23.5h6.7l0.1,2.4c0.5-1,1.2-1.7,2.2-2.2c1-0.5,2.1-0.8,3.4-0.8c2.2,0,3.9,0.7,5,2.1c1.2,1.4,1.7,3.4,1.7,6.1V43h-6.8V32.4
            c0-2.3-0.9-3.4-2.6-3.4c-0.9,0-1.6,0.3-2.2,1c-0.5,0.6-0.7,1.5-0.7,2.7V43H12.4z M38,43V29h-3.1v-5.5H38v-1.9c0-3,0.7-5.3,2.2-6.9
            c1.5-1.6,3.6-2.5,6.3-2.5c0.8,0,1.5,0.1,2.2,0.2c0.7,0.1,1.3,0.3,1.8,0.5L50,18.5c-0.3-0.1-0.6-0.2-1-0.3c-0.4-0.1-0.7-0.1-1.1-0.1
            c-1.1,0-1.9,0.3-2.4,0.9c-0.5,0.6-0.8,1.6-0.8,3v1.4h4.6V29h-4.6v14H38z M52.4,43V12.4h6.8V43H52.4z M70.3,43.6
            c-2.1,0-3.8-0.7-4.9-2c-1.1-1.4-1.7-3.4-1.7-6v-12h6.9v10.6c0,1.2,0.2,2,0.6,2.6c0.4,0.6,1.1,0.8,2,0.8c0.9,0,1.6-0.3,2.1-0.9
            c0.5-0.7,0.8-1.6,0.8-2.8V23.5h6.8V43h-6.7L76,40.6c-0.5,1-1.3,1.7-2.3,2.2C72.8,43.3,71.6,43.6,70.3,43.6z M85.9,43L93,33l-6.7-9.4
            h7.6l3.2,5.3l3.1-5.3h7.3l-6.7,9.5l7.1,10h-7.7l-3.6-5.9L93.2,43H85.9z M119.9,43.6c-1.7,0-3.3-0.4-4.7-1.3c-1.4-0.9-2.4-2-3.2-3.6
            c-0.8-1.5-1.2-3.3-1.2-5.2c0-1.9,0.4-3.6,1.2-5.1c0.9-1.5,2-2.7,3.4-3.6c1.4-0.9,3-1.4,4.8-1.4c1.4,0,2.7,0.4,3.9,1.1
            c1.2,0.7,2.2,1.7,2.9,3V12.4h3.2V43h-3.1l-0.1-3.4c-0.8,1.3-1.8,2.3-3,3C122.9,43.3,121.5,43.6,119.9,43.6z M120.7,40.7
            c1.3,0,2.5-0.3,3.4-0.9c1-0.6,1.8-1.4,2.3-2.5c0.6-1.1,0.9-2.3,0.9-3.7c0-1.4-0.3-2.7-0.9-3.7c-0.6-1.1-1.3-1.9-2.3-2.5
            c-1-0.6-2.1-0.9-3.4-0.9c-1.3,0-2.4,0.3-3.4,0.9c-1,0.6-1.8,1.4-2.3,2.5c-0.6,1.1-0.8,2.3-0.8,3.7c0,1.4,0.3,2.7,0.8,3.7
            c0.6,1.1,1.4,1.9,2.3,2.5C118.3,40.4,119.4,40.7,120.7,40.7z M147.2,43.6c-1.5,0-2.8-0.4-4-1.1c-1.2-0.7-2.1-1.7-2.8-3l-0.1,3.4
            h-3.1V12.4h3.2v15.1c0.8-1.3,1.8-2.3,3-3c1.2-0.7,2.6-1.1,4.2-1.1c1.8,0,3.3,0.4,4.7,1.3s2.4,2,3.2,3.6c0.8,1.5,1.2,3.2,1.2,5.2
            c0,1.9-0.4,3.6-1.3,5.1c-0.8,1.5-2,2.7-3.4,3.6C150.5,43.2,148.9,43.6,147.2,43.6z M146.7,40.7c1.3,0,2.5-0.3,3.4-0.9
            c1-0.6,1.8-1.4,2.3-2.5c0.6-1.1,0.9-2.3,0.9-3.7c0-1.4-0.3-2.7-0.9-3.7c-0.6-1.1-1.3-1.9-2.3-2.5c-1-0.6-2.1-0.9-3.4-0.9
            c-1.3,0-2.4,0.3-3.4,0.9c-1,0.6-1.8,1.4-2.3,2.5c-0.6,1.1-0.8,2.3-0.8,3.7c0,1.4,0.3,2.7,0.8,3.7c0.6,1.1,1.4,1.9,2.3,2.5
            C144.3,40.4,145.4,40.7,146.7,40.7z M179.5,43.5c-2.1,0-3.9-0.4-5.4-1.2c-1.5-0.8-2.7-1.9-3.6-3.4c-0.8-1.5-1.2-3.2-1.2-5.2
            s0.4-3.7,1.3-5.2c0.9-1.5,2.1-2.7,3.6-3.5c1.5-0.9,3.3-1.3,5.4-1.3c1,0,2,0.1,2.9,0.4c1,0.3,1.9,0.6,2.6,1l-0.5,2.8
            c-0.7-0.4-1.5-0.7-2.5-0.9c-1-0.3-1.8-0.4-2.6-0.4c-2.1,0-3.8,0.6-5.1,1.9c-1.3,1.3-1.9,3-1.9,5.1c0,2.2,0.6,4,1.9,5.2
            c1.3,1.3,3,1.9,5.2,1.9c0.8,0,1.7-0.1,2.5-0.3c0.9-0.2,1.8-0.5,2.8-0.9l0.4,2.7c-0.8,0.5-1.7,0.8-2.8,1.1
            C181.6,43.4,180.6,43.5,179.5,43.5z M190.9,43V12.4h3.2V43H190.9z M209.5,43.6c-1.9,0-3.6-0.4-5.1-1.3c-1.5-0.9-2.7-2.1-3.6-3.6
            c-0.9-1.5-1.3-3.2-1.3-5.1c0-1.9,0.4-3.6,1.3-5.1c0.9-1.5,2.1-2.7,3.6-3.6c1.5-0.9,3.2-1.4,5-1.4c1.9,0,3.6,0.4,5.1,1.3
            c1.5,0.9,2.7,2.1,3.6,3.6c0.9,1.5,1.3,3.2,1.3,5.1c0,1.9-0.4,3.6-1.3,5.1c-0.9,1.5-2.1,2.7-3.6,3.6C213,43.2,211.3,43.6,209.5,43.6z
            M209.5,40.7c1.3,0,2.5-0.3,3.4-0.9c1-0.6,1.8-1.4,2.3-2.5c0.6-1.1,0.9-2.3,0.9-3.7c0-1.4-0.3-2.7-0.9-3.7c-0.6-1.1-1.3-1.9-2.3-2.5
            s-2.1-0.9-3.4-0.9c-1.3,0-2.4,0.3-3.4,0.9c-1,0.6-1.8,1.4-2.3,2.5c-0.6,1.1-0.8,2.3-0.8,3.7c0,1.4,0.3,2.7,0.8,3.7
            c0.6,1.1,1.4,1.9,2.3,2.5C207.1,40.4,208.2,40.7,209.5,40.7z M231.4,43.6c-2.1,0-3.8-0.6-4.9-1.9c-1.1-1.3-1.7-3.2-1.7-5.6v-12h3.2
            v11.1c0,2,0.4,3.4,1.1,4.3c0.7,0.9,1.9,1.3,3.5,1.3c1.6,0,2.9-0.6,3.9-1.7c1-1.1,1.4-2.7,1.4-4.6V24.1h3.2V43h-3l-0.1-3.2
            c-0.5,1.2-1.3,2.2-2.5,2.9C234.3,43.3,233,43.6,231.4,43.6z M255.6,43.6c-1.7,0-3.3-0.4-4.7-1.3c-1.4-0.9-2.4-2-3.2-3.6
            c-0.8-1.5-1.2-3.3-1.2-5.2c0-1.9,0.4-3.6,1.2-5.1c0.9-1.5,2-2.7,3.4-3.6c1.4-0.9,3-1.4,4.8-1.4c1.4,0,2.7,0.4,3.9,1.1
            c1.2,0.7,2.2,1.7,2.9,3V12.4h3.2V43h-3.1l-0.1-3.4c-0.8,1.3-1.8,2.3-3,3C258.5,43.3,257.1,43.6,255.6,43.6z M256.4,40.7
            c1.3,0,2.5-0.3,3.4-0.9c1-0.6,1.8-1.4,2.3-2.5c0.6-1.1,0.9-2.3,0.9-3.7c0-1.4-0.3-2.7-0.9-3.7c-0.6-1.1-1.3-1.9-2.3-2.5
            s-2.1-0.9-3.4-0.9c-1.3,0-2.4,0.3-3.4,0.9c-1,0.6-1.8,1.4-2.3,2.5c-0.6,1.1-0.8,2.3-0.8,3.7c0,1.4,0.3,2.7,0.8,3.7
            c0.6,1.1,1.4,1.9,2.3,2.5C254,40.4,255.1,40.7,256.4,40.7z"
          />
          <path
            d="M274.6,17.9v-4h-1.5v-0.8h3.9v0.8h-1.5v4H274.6z M277.9,17.9l0.2-4.8h0.9l1.5,3.1l1.5-3.1h0.9l0.2,4.8h-0.8
            l-0.2-3.6l-1.3,2.7h-0.6l-1.3-2.8l-0.1,3.6H277.9z"
          />
        </svg>
      )
    }

    return (
      <svg
        version="1.1"
        id={id}
        ref={ref}
        data-testid={testID}
        style={logoStyle}
        x="0px"
        y="0px"
        className={logoClass}
        viewBox="0 0 174 55"
        width="174"
        height="55"
      >
        <path
          d="M4.4,20.5c-1.1,0-2-0.4-2.8-1.1c-0.7-0.7-1.1-1.6-1.1-2.6c0-1.1,0.4-1.9,1.1-2.6c0.8-0.7,1.7-1.1,2.8-1.1
          c1.1,0,2,0.4,2.7,1.1c0.7,0.7,1.1,1.5,1.1,2.6c0,1-0.4,1.9-1.1,2.6C6.3,20.1,5.4,20.5,4.4,20.5z M0.9,43V23.5h6.8V43H0.9z M12.4,43
          V23.5h6.7l0.1,2.4c0.5-1,1.2-1.7,2.2-2.2c1-0.5,2.1-0.8,3.4-0.8c2.2,0,3.9,0.7,5,2.1c1.2,1.4,1.7,3.4,1.7,6.1V43h-6.8V32.4
          c0-2.3-0.9-3.4-2.6-3.4c-0.9,0-1.6,0.3-2.2,1c-0.5,0.6-0.7,1.5-0.7,2.7V43H12.4z M38,43V29h-3.1v-5.5H38v-1.9c0-3,0.7-5.3,2.2-6.9
          c1.5-1.6,3.6-2.5,6.3-2.5c0.8,0,1.5,0.1,2.2,0.2c0.7,0.1,1.3,0.3,1.8,0.5L50,18.5c-0.3-0.1-0.6-0.2-1-0.3c-0.4-0.1-0.7-0.1-1.1-0.1
          c-1.1,0-1.9,0.3-2.4,0.9c-0.5,0.6-0.8,1.6-0.8,3v1.4h4.6V29h-4.6v14H38z M52.4,43V12.4h6.8V43H52.4z M70.3,43.6
          c-2.1,0-3.8-0.7-4.9-2c-1.1-1.4-1.7-3.4-1.7-6v-12h6.9v10.6c0,1.2,0.2,2,0.6,2.6c0.4,0.6,1.1,0.8,2,0.8c0.9,0,1.6-0.3,2.1-0.9
          c0.5-0.7,0.8-1.6,0.8-2.8V23.5h6.8V43h-6.7L76,40.6c-0.5,1-1.3,1.7-2.3,2.2C72.8,43.3,71.6,43.6,70.3,43.6z M85.9,43L93,33l-6.7-9.4
          h7.6l3.2,5.3l3.1-5.3h7.3l-6.7,9.5l7.1,10h-7.7l-3.6-5.9L93.2,43H85.9z M119.9,43.6c-1.7,0-3.3-0.4-4.7-1.3c-1.4-0.9-2.4-2-3.2-3.6
          c-0.8-1.5-1.2-3.3-1.2-5.2c0-1.9,0.4-3.6,1.2-5.1c0.9-1.5,2-2.7,3.4-3.6c1.4-0.9,3-1.4,4.8-1.4c1.4,0,2.7,0.4,3.9,1.1
          c1.2,0.7,2.2,1.7,2.9,3V12.4h3.2V43h-3.1l-0.1-3.4c-0.8,1.3-1.8,2.3-3,3C122.9,43.3,121.5,43.6,119.9,43.6z M120.7,40.7
          c1.3,0,2.5-0.3,3.4-0.9c1-0.6,1.8-1.4,2.3-2.5c0.6-1.1,0.9-2.3,0.9-3.7c0-1.4-0.3-2.7-0.9-3.7c-0.6-1.1-1.3-1.9-2.3-2.5
          c-1-0.6-2.1-0.9-3.4-0.9c-1.3,0-2.4,0.3-3.4,0.9c-1,0.6-1.8,1.4-2.3,2.5c-0.6,1.1-0.8,2.3-0.8,3.7c0,1.4,0.3,2.7,0.8,3.7
          c0.6,1.1,1.4,1.9,2.3,2.5C118.3,40.4,119.4,40.7,120.7,40.7z M147.2,43.6c-1.5,0-2.8-0.4-4-1.1c-1.2-0.7-2.1-1.7-2.8-3l-0.1,3.4
          h-3.1V12.4h3.2v15.1c0.8-1.3,1.8-2.3,3-3c1.2-0.7,2.6-1.1,4.2-1.1c1.8,0,3.3,0.4,4.7,1.3s2.4,2,3.2,3.6c0.8,1.5,1.2,3.2,1.2,5.2
          c0,1.9-0.4,3.6-1.3,5.1c-0.8,1.5-2,2.7-3.4,3.6C150.5,43.2,148.9,43.6,147.2,43.6z M146.7,40.7c1.3,0,2.5-0.3,3.4-0.9
          c1-0.6,1.8-1.4,2.3-2.5c0.6-1.1,0.9-2.3,0.9-3.7c0-1.4-0.3-2.7-0.9-3.7c-0.6-1.1-1.3-1.9-2.3-2.5c-1-0.6-2.1-0.9-3.4-0.9
          c-1.3,0-2.4,0.3-3.4,0.9c-1,0.6-1.8,1.4-2.3,2.5c-0.6,1.1-0.8,2.3-0.8,3.7c0,1.4,0.3,2.7,0.8,3.7c0.6,1.1,1.4,1.9,2.3,2.5
          C144.3,40.4,145.4,40.7,146.7,40.7z"
        />
        <path
          d="M165.1,17.9v-4h-1.5v-0.8h3.9v0.8H166v4H165.1z M168.3,17.9l0.2-4.8h0.9l1.5,3.1l1.5-3.1h0.9l0.2,4.8h-0.8
          l-0.2-3.6l-1.3,2.7h-0.6l-1.3-2.8l-0.1,3.6H168.3z"
        />
      </svg>
    )
  }
)

InfluxDBCloudLogo.displayName = 'InfluxDBCloudLogo'
