import {
  BoxGeometry,
  Camera,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  TextureLoader,
  WebGLRenderer,
} from 'three'
import Stats from 'stats.js'
import boxImg from '../assets/images/box.jpg'

export class Application {
  private scene: Scene
  private camera: Camera
  private renderer: WebGLRenderer
  private stats: Stats

  constructor() {
    this.scene = new Scene()
    this.camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    this.renderer = new WebGLRenderer({
      antialias: true, // 抗锯齿
    })
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(this.renderer.domElement)
    window.addEventListener('resize', this.onWindowResize, false)

    // 加载图片材质
    const textureLoader = new TextureLoader()
    const boxTexture = textureLoader.load(boxImg)

    // 几何图形
    const boxGeometry = new BoxGeometry(1, 1, 1)
    // 贴图
    const meshBasicMaterial = new MeshBasicMaterial({ map: boxTexture })
    // 网格
    const mesh = new Mesh(boxGeometry, meshBasicMaterial)
    // 设置相机位置
    this.camera.position.set(0, 0, 5)
    // 设置网格名称, 方便后续获取
    mesh.name = 'box'
    // 添加到舞台
    this.scene.add(mesh)

    // 添加性能监控
    this.stats = new Stats()
    this.stats.showPanel(0)
    document.body.appendChild(this.stats.dom)

    // 渲染
    this.render()
  }

  private onWindowResize = () => {
    // 监听resize, 重置renderer的大小
    this.renderer.setSize(window.innerWidth, window.innerHeight)
  }

  private render() {
    this.stats.begin()
    // 浏览器刷新
    window.requestAnimationFrame(() => this.render())
    // 旋转
    const box = this.scene.getObjectByName('box') as Mesh
    box.rotation.x += 0.01
    box.rotation.y += 0.01
    box.rotation.z += 0.01
    this.renderer.render(this.scene, this.camera)
    this.stats.end()
  }
}
