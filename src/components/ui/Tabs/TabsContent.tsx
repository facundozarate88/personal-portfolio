import { ComponentPropsWithoutRef, ElementRef, FC, forwardRef } from 'react'
import { Content } from '@radix-ui/react-tabs'
import { cn } from '@/lib/utils'

const TabsContent = forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className, ...props }, ref) => (
  <Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className
    )}
    {...props}
  />
))

export default TabsContent;
