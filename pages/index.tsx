import React, { useEffect } from 'react'

import { ApplicationState } from '@/store/reducers/rootReducer';
import { Providers } from "@/components/providers";
import Playground from "@/components/Playground";


export default function Home() {


  return (
    <main>
      <Providers>
        <div>
          <Playground />
        </div>

      </Providers>
    </main>
  );
}

