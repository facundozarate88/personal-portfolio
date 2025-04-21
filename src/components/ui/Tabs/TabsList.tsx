import { ComponentPropsWithoutRef, ElementRef, FC, forwardRef } from 'react'
import { List } from '@radix-ui/react-tabs'
import { cn } from '@/lib/utils'

const TabsList = forwardRef<
  ElementRef<typeof List>,
  ComponentPropsWithoutRef<typeof List>
>(({ className, ...props }, ref) => (
  <List
    ref={ref}
    className={cn(
      'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
      className
    )}
    {...props}
  />
));

export default TabsList;