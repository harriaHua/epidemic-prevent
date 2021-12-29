<!--
 * @Description: 
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-29 17:12:34
 * @LastEditors: Harria
 * @LastEditTime: 2021-12-30 00:08:31
-->
<template>
  <canvas id="canvasScreen"></canvas>
</template>

<script lang="ts">
import { useUserStore } from '@/store/moudules/user'
import { defineComponent, ref, onMounted } from '@vue/runtime-core'
export default defineComponent({
  name: 'DotBackground',
  setup(props, context) {
    class Dot {
      w: number
      h: number
      x: number
      y: number
      color: string
      r: number = 1 + Math.random() * 2
      sx: number = Math.random() * 2 - 1
      sy: number = Math.random() * 2 - 1
      constructor(x: number, y: number) {
        this.w = x
        this.h = y
        this.x = Math.random() * x
        this.y = Math.random() * y
        this.color = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},1)`
      }
      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
        ctx.closePath
        ctx.fillStyle = this.color
        ctx.fill()
      }
      move() {
        this.x += this.sx
        this.y += this.sy
        if (this.x > this.w || this.x < 0) this.sx = -this.sx
        if (this.y > this.h || this.y < 0) this.sy = -this.sy
      }
      drawLine(ctx: CanvasRenderingContext2D, dot: Dot) {
        const distanceX = this.x - dot.x
        const distanceY = this.y - dot.y
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)
        if (distance < 150) {
          if (dot == mouse && distance > 70 && distance < 110) {
            this.x -= (this.x - dot.x) * 0.03
            this.y -= (this.y - dot.y) * 0.03
          }
          let alpha = (150 - distance) / 150
          ctx.beginPath()
          ctx.moveTo(this.x, this.y)
          ctx.lineTo(dot.x, dot.y)
          ctx.closePath()
          ctx.strokeStyle = this.color.slice(0, -2) + `${alpha})`
          ctx.stroke()
        }
      }
    }
    let mouse = new Dot(0, 0)
    window.addEventListener('mousemove', (event) => {
      mouse.x = event.clientX
      mouse.y = event.clientY
    })
    onMounted(() => {
      let userS = useUserStore()
      console.log(userS.token)

      let canvas = <HTMLCanvasElement>document.getElementById('canvasScreen')
      let ctx = <CanvasRenderingContext2D>canvas.getContext('2d')
      let w = canvas.offsetWidth
      let h = canvas.offsetHeight
      canvas.width = w
      canvas.height = h

      let dots: Array<Dot> = []
      for (let i = 0; i < 70; i++) {
        dots.push(new Dot(w, h))
      }
      dots.push(mouse)
      let paint = () => {
        ctx?.clearRect(0, 0, w, h)
        dots.forEach((dot, i, dots) => {
          dot.move()
          dot.draw(ctx)
          for (let j = i + 1; j < dots.length; j++) {
            dot.drawLine(ctx, dots[j])
          }
        })
      }
      let loop = () => {
        requestAnimationFrame(loop)
        paint()
      }
      loop()
    })

    return {}
  },
})
</script>

<style lang="less" scoped>
#canvasScreen {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
}
</style>
