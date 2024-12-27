import React from 'react';
import { render } from 'vitest-browser-react'
import Match from '../components/match';
import SVGViewer from '../svg-viewer';
import { simpleBracket } from '../mock-data/simple-data';
import SingleEliminationBracket from './single-elim-bracket';
import { it } from "vitest";

it('Renders a single elimination bracket without crashing', () => {
  render(
    <SingleEliminationBracket
      matches={simpleBracket}
      matchComponent={Match}
      svgWrapper={({ children, ...props }) => (
        <SVGViewer width={500} height={500} {...props}>
          {children}
        </SVGViewer>
      )}
    />
  );
});
