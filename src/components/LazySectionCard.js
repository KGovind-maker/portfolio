import React, { Suspense, useEffect } from 'react';
import { Card, CardContent } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { markSectionLoaded, setActiveSection } from '../features/ui/uiSlice';

function LazySectionCard({ id, children, elevation = 3, style }) {
  const dispatch = useDispatch();
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: '200px' });

  useEffect(() => {
    if (inView) {
      dispatch(markSectionLoaded(id));
      dispatch(setActiveSection(id === 'hero' ? 'home' : id));
    }
  }, [inView, dispatch, id]);

  return (
    <section id={id} ref={ref} style={{ padding: 0 }}>
      <Card elevation={elevation} style={{ margin: '1.5rem 1rem', ...style }}>
        <CardContent>
          <Suspense fallback={null}>{children}</Suspense>
        </CardContent>
      </Card>
    </section>
  );
}

export default LazySectionCard;


