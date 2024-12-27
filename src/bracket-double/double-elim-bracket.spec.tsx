import React from 'react';
import { render } from 'vitest-browser-react'
import Match from '../components/match';
import SVGViewer from '../svg-viewer';
import simpleDouble from '../mock-data/simple-data-double';
import DoubleEliminationBracket from './double-elim-bracket';
import { it } from "vitest";

it('Renders a single elimination bracket without crashing', () => {
  render(
    <DoubleEliminationBracket
      matches={simpleDouble}
      matchComponent={Match}
      svgWrapper={({ children, ...props }) => (
        <SVGViewer width={500} height={500} {...props}>
          {children}
        </SVGViewer>
      )}
    />
  );
});
