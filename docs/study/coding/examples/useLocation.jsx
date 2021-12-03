    const usePrevious = (value) => {
      const ref = React.useRef()
      React.useEffect(() => { ref.current = value })

      return ref.current
    }
  
  const useLocationChange = (action) => {
    const location = useLocation()
    const prevLocation = usePrevious(location)
    React.useEffect(() => { 
      action(location, prevLocation) 
    }, [location])
  }
  
  const MyComponent1 = () => {
    useLocationChange((location, prevLocation) => { 
      console.log('changed from', prevLocation, 'to', location) 
    })
  }