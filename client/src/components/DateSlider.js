import React, { useEffect, useRef } from 'react';
import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';

function DateSlider({ range, onChange }) {
    const slider = useRef(null);

    useEffect(() => {
        noUiSlider.create(slider.current, {
            start: range,
            connect: true,
            range: {
                min: 1970,
                max: new Date().getFullYear()
            },
            step: 1,
            tooltips: true,
            format: {
                to: value => parseInt(value),
                from: value => parseInt(value)
            }
        });

        slider.current.noUiSlider.on('update', (values) => {
            onChange(values.map(value => parseInt(value)));
        });

        return () => {
            if (slider.current) {
                slider.current.noUiSlider.destroy();
            }
        };
    }, [range, onChange]);

    return <div ref={slider}></div>;
}

export default DateSlider;
