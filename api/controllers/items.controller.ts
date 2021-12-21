import express, { Request, Response } from 'express'
import { ItemService } from '../services/items/items.service'
import { Item, BaseItem } from '../services/items/item.interface'

export const itemsController = express.Router()

const itemService: ItemService = new ItemService()

itemsController.get('/', async (req: Request, res: Response) => {
  try {
    const items: Item[] = await itemService.findAll()
    res.status(200).send(items)
  } catch (e: any) {
    res.status(500).send(e.message)
  }
})

itemsController.get('/:id', async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10)

  try {
    const item: Item = await itemService.find(id)

    if (item) {
      return res.status(200).send(item)
    }

    res.status(404).send('item not found')
  } catch (e: any) {
    res.status(500).send(e.message)
  }
})

itemsController.post('/', async (req: Request, res: Response) => {
  try {
    const item: BaseItem = req.body

    const newItem = await itemService.create(item)

    res.status(201).json(newItem)
  } catch (e: any) {
    res.status(500).send(e.message)
  }
})

itemsController.put('/:id', async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10)

  try {
    const itemUpdate: Item = req.body

    const existingItem: Item = await itemService.find(id)

    if (existingItem) {
      const updatedItem = await itemService.update(id, itemUpdate)
      return res.status(200).json(updatedItem)
    }

    const newItem = await itemService.create(itemUpdate)

    res.status(201).json(newItem)
  } catch (e: any) {
    res.status(500).send(e.message)
  }
})

// DELETE items/:id

itemsController.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10)
    await itemService.delete(id)

    res.sendStatus(204)
  } catch (e: any) {
    res.status(500).send(e.message)
  }
})
